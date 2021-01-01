import React, { useState } from 'react';

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  const setStatus = () => {
    setIsOnline(navigator.onLine);
  };

  window.addEventListener('online', setStatus);
  window.addEventListener('offline', setStatus);
  window.addEventListener('load', setStatus);

  const onlineStatusContent = (
    <div className="OnlineStatus">
      <div className="OnlineStatus__no-wifi-icon-wrapper">
        <svg
          className="OnlineStatus__no-wifi-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <path d="M735.06 138.06l-93.08 93.08-20.77-3.92c-78.58-14.11-163.43-14.11-243.58.2-103.08 18.42-205.56 63.29-288.26 126.2-20.39 15.48-54.29 44.87-68.98 60.16L10 424.16l51.73 51.74 51.93 51.73 18.62-17.64c83.28-78.78 179.3-125.61 290.22-141.48 31.94-4.7 85.24-7.64 85.24-4.9 0 1.18-11.17 13.13-25.08 26.65l-24.89 24.5-13.72 1.37c-23.12 2.35-62.32 10.78-87.79 18.81-74.27 23.71-128.94 55.85-189.1 111.11l-18.42 16.85 39.98 39.98 39.78 39.78-45.07 44.68c-24.69 24.69-72.31 71.33-105.82 104.06l-60.55 59.18 52.12 52.12 52.32 52.32 83.87-82.11c46.05-45.07 228.49-226.53 405.25-403.09L932 148.84l-51.93-51.93-51.93-51.93-93.08 93.08zm124.04-19.01l29 29-356.26 355.48c-195.96 195.57-368.4 367.03-383.3 380.95l-27.04 25.47-29.39-29.39c-16.07-16.07-29.2-29.59-29.2-30.18s47.23-47.23 105.04-103.66l105.04-102.68L233 604.05l-39.78-39.78 8.82-7.84c67.8-60.36 157.75-99.74 249.85-109.74l19.6-1.96 53.3-53.3c29.39-29.39 52.71-53.89 51.93-54.67-.78-.78-17.64-2.35-37.43-3.72-122.87-8.03-245.54 23.32-346.07 88.97-28.02 18.23-41.54 28.61-63.49 48.01l-16.27 14.5-29.78-29.79-29.59-29.78 13.72-12.74c59.57-55.26 141.88-103.66 223-131.1 70.35-23.71 130.51-33.31 208.11-33.12 50.95.2 78.78 2.74 125.22 11.76l27.04 5.29 87.59-87.59c48.01-48.01 88.38-87.4 89.36-87.4 1.18 0 15.1 13.13 30.97 29zM835.58 323.05l-7.84 13.33 6.08 3.53c27.24 15.87 75.05 51.15 99.16 73.29l12.74 11.76-29.79 29.79-29.79 29.98-10.39-9.8c-23.71-22.34-63.69-51.15-98.76-71.13-9.6-5.49-18.03-9.99-18.62-9.99-1.37 0-14.5 27.24-13.33 28.02.39.39 9.21 5.29 19.4 10.97 35.86 20.18 68.78 44.88 102.49 76.62l19.2 18.22 51.94-51.74L990 424.16l-20.77-19.99c-32.14-31.16-82.5-69.57-116.79-89.55l-9.01-5.1-7.85 13.53zM690.18 467.67c-3.33 7.05-6.07 13.32-6.07 14.11 0 .59 9.41 6.08 20.77 11.95 11.56 5.88 30.18 16.66 41.54 24.1 19.99 12.93 59.18 43.5 59.18 46.25 0 .59-13.13 14.3-29.2 30.37l-29.2 29.2-15.48-12.34c-22.93-18.62-50.75-36.25-75.44-47.82-22.73-10.78-49.58-20.38-51.54-18.42-1.18 1.17-9.01 27.63-8.23 28.02.2 0 8.43 3.13 18.03 6.66 41.15 15.29 77.01 37.04 111.5 67.8l21.16 19.2 51.93-51.73 51.73-51.73-16.26-15.48c-38.01-35.86-89.16-71.33-127.96-88.37l-10.58-4.7-5.88 12.93zM526.36 626.39c-.59 5.09-1.37 12.15-1.76 15.48l-.78 6.27 13.91 1.96c19.2 2.94 46.05 10.97 63.29 19.01 14.5 6.66 41.74 23.71 52.71 33.12l5.88 4.9-41.35 41.74c-22.93 22.93-58.4 59.77-79.17 81.91-20.58 22.14-38.21 40.17-39.19 40.17-.78 0-24.3-24.1-51.93-53.5-27.63-29.2-50.95-53.3-51.73-53.3-.59 0-6.08 4.9-11.95 10.78l-10.59 10.59 22.54 23.12c12.35 12.74 40.37 42.33 62.32 65.65C480.5 897.8 499.12 917 499.9 917s19.4-19.2 41.35-42.72c21.95-23.32 67.61-70.55 101.51-104.84l61.92-62.51-16.26-15.28c-41.94-39.39-96.41-65.84-151.67-73.49l-9.21-1.17-1.18 9.4z" />
        </svg>
      </div>
      <div className="OnlineStatus__text">
        <p>You are offline! Some features unavailable.</p>
      </div>
    </div>
  );

  return !isOnline && onlineStatusContent;
};

export default OnlineStatus;
