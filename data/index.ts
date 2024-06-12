import {Contact} from "@/types/chat.types";

export const data:Contact[] = [
  {
    userId: 'user1',
    name: 'Sam',
    unreadCount: 1,
    profilePictureURL:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chat: [
      {
        user1: {
          message: 'Hello',
          timeStamp: '10:40',
        },
        you: {
          message: 'Hey',
          timeStamp: '10:41',
        },
      },
      {
        user1: {
          message: 'How are you doing?',
          timeStamp: '10:41',
        },
        you: {
          message: 'Fine mate, how about you?',
          timeStamp: '10:42',
        },
      },
      {
        user1: {
          message: 'great',
          timeStamp: '10:44',
        },
        you: {
          message: "Coming to my wedding right? I don't think you confirmed.",
          timeStamp: '10:44',
        },
      },
      {
        user1: {
          message: 'Oh yes. There is no way i am going to miss that.',
          timeStamp: '10:44',
        },
        you: {
          message:
              'Awesome. See ya there. Let me know if you want me to book tickets.',
          timeStamp: '10:45',
        },
      },
    ],
  },
  {
    userId: 'user2',
    name: 'Elon',
    unreadCount: 0,
    profilePictureURL:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chat: [
      {
        user2: {
          message: 'there?',
          timeStamp: '11:39',
        },
        you: {
          message: 'yeah, whats up?',
          timeStamp: '11:47',
        },
      },
      {
        user2: {
          message: 'movie tomorrow?',
          timeStamp: '11:49',
        },
        you: {
          message: 'Yeah sure. let me know the timings. and which movie again?',
          timeStamp: '11:52',
        },
      },
      {
        user2: {
          message: 'the new mad max movie. Reviews are great.',
          timeStamp: '11:52',
        },
        you: {
          message: 'Oh yes, i have been waiting for that one.',
          timeStamp: '11:54',
        },
      },
    ],
  },
  {
    userId: 'user3',
    name: 'Kate',
    unreadCount: 1,
    profilePictureURL:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chat: [
      {
        user2: {
          message: 'that burger was delicious!',
          timeStamp: '13:12',
        },
        you: {
          message: 'Oh yes, no doubt.',
          timeStamp: '13:13',
        },
      },
      {
        user2: {
          message: 'We are definetely going to that place again.',
          timeStamp: '13:13',
        },
        you: {
          message: 'we are. My mouth waters whenever drive thorugh that area',
          timeStamp: '13:14',
        },
      },
      {
        user2: {
          message: 'haha, I bet. Lets take Tony and Natasha too next time',
          timeStamp: '13:14',
        },
        you: {
          message: 'Sure. they would love it',
          timeStamp: '13:15',
        },
      },
    ],
  },
];
