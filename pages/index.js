import { useEffect, useState } from 'react'
import { Box, Flex, Grid, Textarea, Link, useThemeUI } from 'theme-ui'
import { times, range, random, sample } from 'lodash'
import { collections, objects } from 'friendly-words'
import useSound from 'use-sound'

// const collections = ['teams', 'objects', 'predicates', 'collections']
//   .map(n => friendlyWords[n])
//   .map(sample)

export default () => {
  const { theme } = useThemeUI()
  const [cells, setCells] = useState([])

  const genCell = () => ({
    width: random(1, 4),
    fontFamily: sample(['heading', 'body']),
    fontSize: theme.fontSizes[sample(range(2, theme.fontSizes.length - 4))],
    value: sample(['', sample(collections), sample(objects)])
  })

  const pushCell = () => setCells(c => [genCell(), ...c])

  useEffect(() => {
    times(200, pushCell)
  }, [])

  const soundUrl =
    'https://cdn.glitch.com/2d084c8d-c390-4414-a1fd-15fc40d2120a%2FMetallic_Clank.mp3?v=1589870359433'

  // const [playbackRate, setPlaybackRate] = useState(0.75)

  const [play] = useSound(soundUrl, { volume: 1, interrupt: true }) //, { playbackRate, volume: 1 })
  if (typeof window !== 'undefined') window.play = play

  useEffect(() => {
    // I have this ability so I am using it.
    const events = [
      'dblclick',
      'focusout',
      'resize',
      'paste',
      'afterprint'
    ].map(n =>
      document.addEventListener(n, () => {
        pushCell()
        // setPlaybackRate(playbackRate + 0.1)
        window.play()
        console.log('played')
      }, { passive: true })
    )
    return () => {
      events.map(document.removeEventListener)
    }
  }, [])

  return (
    <Grid
      gap="1px"
      bg="lilac"
      p="1px"
      sx={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}
    >
      {cells.map(({ width, value, ...cell }, i) =>
        i % 20 === 1 ? (
          <Box
            sx={{
              gridColumn: [null, `span ${random(1, 3)}`],
              gridRow: `span ${random(1, 2)}`
            }}
          />
        ) : (
          <Textarea
            variant="forms.input"
            sx={{
              height: '100%',
              minHeight: 48,
              lineHeight: 1,
              width: '100%',
              borderRadius: 0,
              gridColumn: [null, `span ${width}`],
              gridRow: i % 15 === 0 ? 'span 2' : null,
              ...cell
            }}
            rows={1}
            defaultValue={value}
            key={i}
          />
        )
      )}
      <Flex
        sx={{
          p: 2,
          bg: 'indigo',
          color: 'white',
          textAlign: 'center',
          fontFamily: 'heading',
          placeContent: 'center',
          gridColumn: ['span 2', 'span 3']
        }}
      >
        <span>
          By{' '}
          <Link
            color="inherit"
            href="https://lachlanjc.com"
            mx={1}
            sx={{ fontWeight: 'bold' }}
          >
            @lachlanjc
          </Link>{' '}
          with &lt;3
        </span>
      </Flex>
    </Grid>
  )
}
