import React, { useState } from "react";
import './Task6.css'

const Task6 = () => {
  const allMusic = [
    {
      title: "Millionaire",
      author: "YoYo Honey Singh",
      audio: "/assets/audio/MILLIONAIRE.mp3",
      img: "/assets/images/musicThumbnail/millionaire.jpg",
      playing: false,
    },
    {
      title: "Old Money",
      author: "Ap Dhillon",
      audio: "/assets/audio/OLD_MONEY.mp3",
      img: "/assets/images/musicThumbnail/oldMoney.jpg",
      playing: false,
    },
    {
      title: "Big Dawgs",
      author: "Hanumankind",
      audio: "/assets/audio/Big_Dawgs.mp3",
      img: "/assets/images/musicThumbnail/bigDawgs.jpg",
      playing: false,
    },
    {
      title: "Aaj ki Raat",
      author: "Tamannah Bhatia",
      audio: "/assets/audio/Aaj_Ki_Raat.mp3",
      img: "/assets/images/musicThumbnail/aajKiRaat.jpg",
      playing: false,
    },
    {
      title: "Taras",
      author: "Amitabh Bhattacharya",
      audio: "/assets/audio/Taras.mp3",
      img: "/assets/images/musicThumbnail/taras.jpg",
      playing: false,
    },
  ];

  const [musicList, setMusicList] = useState(allMusic);
  const [currentMusic, setCurrentMusic] = useState(null);

  const handlePlayMusic = (selectedMusic) => {
    const updatedMusicList = musicList.map((music) =>
      music.audio === selectedMusic.audio
        ? { ...music, playing: true }
        : { ...music, playing: false }
    );
    setMusicList(updatedMusicList);
    setCurrentMusic(selectedMusic);
  };

  return (
    <main className="container mt-5 main d-flex justify-content-center align-items-center">
      {/* Current Music Section */}
      <div className="currentMusic">
        {currentMusic ? (
          <>
            <div
              className="MPimg"
              style={{
                backgroundImage: `url(${currentMusic.img})`,
              }}
            ></div>
            <h1 className="MPtitle">{currentMusic.title}</h1>
            <h2 className="MPauthor">{currentMusic.author}</h2>
            <audio controls autoPlay src={currentMusic.audio}></audio>
          </>
        ) : (
          <>
            <div
              className="MPimg"
              style={{
                backgroundImage: `url(/assets/images/musicThumbnail/noMusic.jpg)`,
              }}
            ></div>
            <h1 className="MPtitle">Title</h1>
            <h2 className="MPauthor">Singer</h2>
            <audio controls></audio>
          </>
        )}
      </div>

      {/* Music List */}
      <ul className="musicList">
        {musicList.map((music, index) => (
          <li key={index} className="musicListItem">
            <div
              className="listImg"
              style={{
                backgroundImage: `url(${music.img})`,
              }}
            ></div>
            <div className="listText">
              <h1 className="listTitle">{music.title}</h1>
              <h2 className="listAuthor">{music.author}</h2>
            </div>
            <button
              className="listBtn"
              onClick={() => handlePlayMusic(music)}
            >
              {music.playing ? "Playing" : "Play"}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Task6;
// import React, { useState, useRef, useEffect } from "react";
// import './Task6.css';

// const Task6 = () => {
//   const allMusic = [
//     {
//       title: "Millionaire",
//       author: "YoYo Honey Singh",
//       audio: "/assets/audio/MILLIONAIRE.mp3",
//       img: "/assets/images/musicThumbnail/millionaire.jpg",
//       playing: false,
//     },
//     {
//       title: "Old Money",
//       author: "Ap Dhillon",
//       audio: "/assets/audio/OLD_MONEY.mp3",
//       img: "/assets/images/musicThumbnail/oldMoney.jpg",
//       playing: false,
//     },
//     {
//       title: "Big Dawgs",
//       author: "Hanumankind",
//       audio: "/assets/audio/Big_Dawgs.mp3",
//       img: "/assets/images/musicThumbnail/bigDawgs.jpg",
//       playing: false,
//     },
//     {
//       title: "Aaj ki Raat",
//       author: "Tamannah Bhatia",
//       audio: "/assets/audio/Aaj_Ki_Raat.mp3",
//       img: "/assets/images/musicThumbnail/aajKiRaat.jpg",
//       playing: false,
//     },
//     {
//       title: "Taras",
//       author: "Amitabh Bhattacharya",
//       audio: "/assets/audio/Taras.mp3",
//       img: "/assets/images/musicThumbnail/taras.jpg",
//       playing: false,
//     },
//   ];

//   const [musicList, setMusicList] = useState(allMusic);
//   const [currentMusic, setCurrentMusic] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);

//   const audioRef = useRef(null);

//   const handlePlayMusic = (selectedMusic) => {
//     if (currentMusic && audioRef.current) {
//       audioRef.current.pause();
//     }
    
//     const updatedMusicList = musicList.map((music) =>
//       music.audio === selectedMusic.audio
//         ? { ...music, playing: true }
//         : { ...music, playing: false }
//     );
//     setMusicList(updatedMusicList);
//     setCurrentMusic(selectedMusic);
//     setIsPlaying(true);
//   };

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleSeek = (e) => {
//     const seekTo = e.target.value;
//     audioRef.current.currentTime = seekTo;
//     setCurrentTime(seekTo);
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     audioRef.current.volume = newVolume;
//     setVolume(newVolume);
//   };

//   useEffect(() => {
//     if (currentMusic && audioRef.current) {
//       audioRef.current.play();
//     }
//   }, [currentMusic]);

//   return (
//     <main className="container mt-5 main d-flex justify-content-center align-items-center">
//       {/* Current Music Section */}
//       <div className="currentMusic">
//         {currentMusic ? (
//           <>
//             <div
//               className="MPimg"
//               style={{
//                 backgroundImage: `url(${currentMusic.img})`,
//               }}
//             ></div>
//             <h1 className="MPtitle">{currentMusic.title}</h1>
//             <h2 className="MPauthor">{currentMusic.author}</h2>

//             {/* Custom Audio Controls */}
//             <div className="custom-controls">
//               <button className="play-pause-btn" onClick={togglePlayPause}>
//                 {isPlaying ? "Pause" : "Play"}
//               </button>

//               {/* Seek Bar */}
//               <input
//                 type="range"
//                 className="seek-bar"
//                 value={currentTime}
//                 max={duration}
//                 onChange={handleSeek}
//               />
//               <span className="current-time">
//                 {new Date(currentTime * 1000).toISOString().substr(14, 5)}
//               </span>
//               <span className="duration">
//                 {new Date(duration * 1000).toISOString().substr(14, 5)}
//               </span>

//               {/* Volume Control */}
//               <input
//                 type="range"
//                 className="volume-bar"
//                 min="0"
//                 max="1"
//                 step="0.01"
//                 value={volume}
//                 onChange={handleVolumeChange}
//               />
//             </div>

//             <audio
//               ref={audioRef}
//               src={currentMusic.audio}
//               onTimeUpdate={handleTimeUpdate}
//               onLoadedMetadata={handleLoadedMetadata}
//             />
//           </>
//         ) : (
//           <>
//             <div
//               className="MPimg"
//               style={{
//                 backgroundImage: `url(/assets/images/musicThumbnail/noMusic.jpg)`,
//               }}
//             ></div>
//             <h1 className="MPtitle">Title</h1>
//             <h2 className="MPauthor">Singer</h2>
//             <audio controls></audio>
//           </>
//         )}
//       </div>

//       {/* Music List */}
//       <ul className="musicList">
//         {musicList.map((music, index) => (
//           <li key={index} className="musicListItem">
//             <div
//               className="listImg"
//               style={{
//                 backgroundImage: `url(${music.img})`,
//               }}
//             ></div>
//             <div className="listText">
//               <h1 className="listTitle">{music.title}</h1>
//               <h2 className="listAuthor">{music.author}</h2>
//             </div>
//             <button
//               className="listBtn"
//               onClick={() => handlePlayMusic(music)}
//             >
//               {music.playing ? "Playing" : "Play"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default Task6;
