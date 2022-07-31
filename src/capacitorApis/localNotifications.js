import { LocalNotifications } from '@capacitor/local-notifications';

const callLocalNotification = () => {
  LocalNotifications.schedule({
    notifications: [
      {
        title: 'On sale',
        body: 'Widgets are 10% off. Act fast!',
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 5) },
        sound: null,
        attachments: null,
        actionTypeId: '',
        extra: null,
      },
    ],
  });
};
export default callLocalNotification;
