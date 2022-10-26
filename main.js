let isIgnite = false
function changeCard(event) {
  const card = event.currentTarget
  const trailName = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${trailName}.svg)`
}
