import SimpleSchema from 'simpl-schema';

const StudentFormSchema = new SimpleSchema({
  income: { label: 'Annual Household Income', type: String },
  email: { label: 'Email', type: String },
  totalOccupants: { label: 'Total number of occupants in the home', type: String, defaultValue: '' },
  numAdults: { label: 'Of this number, how many are adults?', type: String, defaultValue: '' },
  numRetired: { label: 'How many of the adults are retired?', type: String, defaultValue: '' },
  numChildrenBelow5: { label: 'Amount of children age 5 or younger', type: String, defaultValue: '' },
  numChildren6to12: { label: 'Amount of children ages 6 to 12', type: String, defaultValue: '' },
  numChildren13to17: { label: 'Amount of children ages 13 to 17', type: String, defaultValue: '' },
  membersNotHomeDay: { label: 'Number of HH members at work/school during the day', type: String, defaultValue: '' },
  membersNotHomeNight: {
    label: 'Number of HH members at work/school during the night',
    type: String, defaultValue: '' },
  membersHomeDay: { label: 'Number of HH members home during the day', type: String, defaultValue: '' },
  membersHomeWork: { label: 'Number of HH members working from home', type: String, defaultValue: '' },
  employerName: { label: 'Employer name', type: String, defaultValue: '' },
  occupation: { label: 'Occupation/Position', type: String, defaultValue: '' },
  workPhone: { label: 'Work Phone Number', type: String, defaultValue: '' },
});

export { StudentFormSchema };
