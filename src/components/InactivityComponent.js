import { useEffect, useRef, useCallback } from 'react';

const inactivityTimeout = .5 * 60 * 1000 // 60 sec 1000 mill

const InactivityTimer = () => {
  const inactivityTimerRef = useRef();
  const channelRef = useRef(new BroadcastChannel('inactivity-channel'));

  const onInactivity = useCallback(()=>{
    alert('just alert')
  },[])

  useEffect(() => {
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = setTimeout(onInactivity, inactivityTimeout);
    };

    const handleUserActivity = () => {
      // Broadcast a message to other tabs to reset their inactivity timers.
      channelRef.current.postMessage({ action: 'resetInactivity' });
      resetInactivityTimer();
    };

    // Add event listeners for user activity.
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('mousedown', handleUserActivity);
    document.addEventListener('keypress', handleUserActivity);
    document.addEventListener('touchstart', handleUserActivity);

    // Start the inactivity timer when the component mounts.
    resetInactivityTimer();

    // Clean up event listeners when the component unmounts.
    return () => {
      clearTimeout(inactivityTimerRef.current);
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('mousedown', handleUserActivity);
      document.removeEventListener('keypress', handleUserActivity);
      document.removeEventListener('touchstart', handleUserActivity);
    };

  }, [onInactivity]);

  // Listen for messages from other tabs to reset their inactivity timers.
  useEffect(() => {
    const channelReference = channelRef.current
    const handleBroadcastMessage = (event) => {
      if (event.data.action === 'resetInactivity') {
        clearTimeout(inactivityTimerRef.current);
        inactivityTimerRef.current = setTimeout(onInactivity, inactivityTimeout);
      }
    };

    channelReference.addEventListener('message', handleBroadcastMessage);

    // Clean up the event listener when the component unmounts.
    return () => {
      channelReference.removeEventListener('message', handleBroadcastMessage);
    };
  }, [onInactivity]);

  return null;
};

export default InactivityTimer;
