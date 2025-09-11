# 🌊 Sea Wars - Battleship Game

A real-time multiplayer Battleship game built with Node.js, Express, and Socket.IO.

## 🚀 Features

- **Real-time multiplayer gameplay** using Socket.IO
- **Responsive design** that works on desktop and mobile devices
- **Beautiful UI** with modern gradients and animations
- **Live chat** during gameplay
- **Automatic ship placement** with smart collision detection
- **Turn-based gameplay** with visual feedback

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js, Socket.IO
- **Frontend**: HTML5 Canvas, Bootstrap 3, jQuery
- **Styling**: CSS3 with modern gradients and animations

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Ship
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8900
   ```

## 🎮 How to Play

1. **Connect**: Open the game in your browser
2. **Wait**: The game will automatically match you with another player
3. **Battle**: Take turns firing shots at your opponent's grid
4. **Chat**: Communicate with your opponent using the chat feature
5. **Win**: Sink all enemy ships to claim victory!

## 🎯 Game Rules

- Each player has a 10x10 grid with 5 ships of different sizes
- Ships are placed randomly at the start of each game
- Players take turns firing shots
- Hit a ship to continue your turn
- Miss and it becomes your opponent's turn
- First player to sink all enemy ships wins!

## 🏗️ Project Structure

```
Ship/
├── app/
│   ├── game.js          # Main game logic
│   ├── gameStatus.js    # Game status constants
│   ├── player.js        # Player class and ship placement
│   ├── setting.js       # Game configuration
│   └── ship.js          # Ship class
├── public/
│   ├── css/
│   │   └── style.css    # Game styling
│   ├── js/
│   │   ├── client.js    # Client-side Socket.IO logic
│   │   └── game.js      # Client-side game logic
│   └── index.html       # Main HTML file
├── server.js            # Express server and Socket.IO setup
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Configuration

Game settings can be modified in `app/setting.js`:

```javascript
module.exports = {
  gridRows: 10, // Grid height
  gridCols: 10, // Grid width
  ships: [5, 4, 3, 3, 2], // Ship sizes
};
```

## 🚀 Deployment

To deploy this game:

1. Set the port in `server.js` or use environment variables
2. Deploy to your preferred hosting platform (Heroku, AWS, etc.)
3. Ensure WebSocket support is enabled on your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🎉 Acknowledgments

- Built with ❤️ using modern web technologies
- Inspired by the classic Battleship board game
- Thanks to the Socket.IO team for excellent real-time capabilities
