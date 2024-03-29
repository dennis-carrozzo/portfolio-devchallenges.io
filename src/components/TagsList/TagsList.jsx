import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function TagList ({ tags, selectedTags, clickHandler }) {
  return (
    <Stack
      direction='row'
      spacing={2}
      useFlexGap
      sx={{ flexWrap: 'wrap', width: 1 }}
      justifyContent='start'
      alignItems='center'
    >
      {Array.from(tags || []).map(tag => {
        return (
          <Button
            key={tag}
            aria-label={`filter by tag: ${tag}`}
            onClick={e => {
              clickHandler(e.target.innerText.substring(1).toLowerCase())
            }}
            size='small'
            variant={selectedTags.has(tag) ? 'contained' : 'outlined'}
            color={selectedTags.has(tag) ? 'blue' : 'secondary'}
            sx={{ color: selectedTags.has(tag) ? 'white' : 'secondary' }}
          >
            #{tag}
          </Button>
        )
      })}
    </Stack>
  )
}
