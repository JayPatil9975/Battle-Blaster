class Player {
  constructor({ x, y, radius, color, username }) {
    this.x = x
    this.y = y
    this.radius = radius // Reduce the base radius for a smaller tank
    this.color = color
    this.username = username
  }

  draw() {
    // Display username above the tank
    c.font = '12px sans-serif' // Smaller font for better visibility with reduced tank size
    c.fillStyle = 'white'
    c.fillText(this.username, this.x - 20, this.y - this.radius - 10) // Adjust username position for smaller tank

    c.save()
    c.shadowColor = this.color
    c.shadowBlur = 20 // Reduce shadow blur for a smaller glow effect

    // Draw tank tracks (two long rectangles)
    c.fillStyle = 'black'
    c.fillRect(this.x - this.radius * 1.2, this.y + this.radius / 2, this.radius * 2.4, this.radius / 4) // Bottom track
    c.fillRect(this.x - this.radius * 1.2, this.y - this.radius * 0.75, this.radius * 2.4, this.radius / 4) // Top track

    // Draw tank body (main rectangle)
    c.fillStyle = this.color
    c.fillRect(this.x - this.radius, this.y - this.radius / 2, this.radius * 2, this.radius)

    // Draw tank turret base (smaller rectangle)
    c.fillStyle = 'darkgray'
    c.fillRect(this.x - this.radius / 2, this.y - this.radius * 0.75, this.radius, this.radius / 2)

    // Draw tank barrel (long rectangle extending from turret)
    c.fillStyle = 'gray'
    c.fillRect(this.x + this.radius / 2, this.y - this.radius * 0.65, this.radius, this.radius / 6)

    c.restore()
  }
}