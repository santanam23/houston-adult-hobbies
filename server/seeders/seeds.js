const faker = require('faker');

const db = require('../config/connection');
const { Comment, User } = require('../models');

db.once('open', async () => {
  await Comment.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create comments
  let createdComment = [];
  for (let i = 0; i < 100; i += 1) {
    const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdComments = await Comment.create({ commentText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { comments: createdComment._id } }
    );

    createdComments.push(createdComment);
    updatedUser();
  }

  // create reply
  for (let i = 0; i < 100; i += 1) {
    const replyBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomCommentIndex = Math.floor(Math.random() * createdComment.length);
    const { _id: commentId } = createdComment[randomCommentIndex];

    await Comment.updateOne(
      { _id: commentId },
      { $push: { replies: { replyBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});