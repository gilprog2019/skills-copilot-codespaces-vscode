function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    description: 'Skills of a member',
    fields: [
      {
        name: 'id',
        type: 'String',
        description: 'ID of the member',
      },
      {
        name: 'skills',
        type: '[String]',
        description: 'Skills of the member',
      },
    ],
  };
}