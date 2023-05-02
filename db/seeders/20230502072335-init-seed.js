/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          title: 'First Post',
          body: 'This is the first post',
          image: 'https://picsum.photos/id/1/200/300',
        },
        {
          title: 'Second Post',
          body: 'This is the second post',
          image: 'https://picsum.photos/id/2/200/300',
        },
        {
          title: 'Third Post',
          body: 'This is the third post',
          image: 'https://picsum.photos/id/3/200/300',
        },
        {
          title: 'Fourth Post',
          body: 'This is the fourth post',
          image: 'https://picsum.photos/id/4/200/300',
        },
        {
          title: 'Fifth Post',
          body: 'This is the fifth post',
          image: 'https://picsum.photos/id/5/200/300',
        },
        {
          title: 'Sixth Post',
          body: 'This is the sixth post',
          image: 'https://picsum.photos/id/6/200/300',
        },
        {
          title: 'Seventh Post',
          body: 'This is the seventh post',
          image: 'https://picsum.photos/id/7/200/300',
        },
        {
          title: 'Eighth Post',
          body: 'This is the eighth post',
          image: 'https://picsum.photos/id/8/200/300',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
