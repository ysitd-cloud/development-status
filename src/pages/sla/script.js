export default {
  data() {
    return {
      levels: [
        {
          name: '95%',
          downtime: '36 hours',
          categories: ['Beta Service'],
        },
        {
          name: '99%',
          downtime: '7.2 hours',
          categories: ['Cache'],
        },
        {
          name: '99.9%',
          downtime: '43.2 minutes',
          categories: ['App Service without fs mount'],
        },
        {
          name: '99.99%',
          downtime: '4.32 minutes',
          categories: ['Database', 'Blob Storage'],
        },
      ],
    };
  },
};
