import sketch from 'sketch'
import UI from 'sketch/ui'

export default function () {
  var userInput = UI.getStringFromUser("Enter New Layer Name", 'unnamed')
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  if (selectedLayers.length != 0 && selectedLayers.length != null) {
    selectedLayers.forEach(
      layer => {
        layer.name = userInput
      }
    )
    UI.message(`${selectedLayers.length} selection(s) have been renamed 👍`)
  } else if (selectedLayers.length != 0 && selectedLayers.length == null) {
    selectedLayers.forEach(
      layer => {
        layer.name = userInput
      }
    )
    UI.message(`${selectedLayers.length} selection(s) have been renamed 👍`)
  } else {
    UI.message(`🛑 Please select at least one layer/group/artboard to rename it`)
  }
}