import sketch from 'sketch'
import UI from 'sketch/ui'

export default function () {
  var string = UI.getStringFromUser("Enter New Layer Name", 'unnamed')
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  selectedLayers.forEach(
    layer => {
      layer.name = string
    }
  )
}