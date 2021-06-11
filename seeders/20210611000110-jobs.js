'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('jobs', [
      {
      jobTitle: 'Class A Driver',
      jobCat: 'Transportation',
      employer: 'Swift Transportation',
      desc: 'Over the Road Trucker',
      skills: 'Class A CDL',
      location: 'Phoenix, AZ',
      website: 'https://www.swifttrans.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Carpenter',
      jobCat: 'Carpentry',
      employer: 'Sebastian Construction Group, LLC',
      desc: 'High End Residential Construction',
      skills: 'Quality Workmanship',
      location: 'Houston, Tx',
      website: 'https://take.surveys.ci/s/F90042',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Class A Driver',
      jobCat: 'Transportation',
      employer: 'Service Transport',
      desc: 'Over the Road, Regional, and Local',
      skills: 'Class A CDL',
      location: 'Houston, Tx',
      website: 'http://svtn.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Framing Carpenter',
      jobCat: 'Carpentry',
      employer: 'Access Skilled Resources, Inc.',
      desc: 'Take offs and Build outs',
      skills: 'Read Blueprints',
      location: 'Houston, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Lead Welder / Fabricator',
      jobCat: 'Welding',
      employer: 'Texas Quality Metal Works',
      desc: 'MIG, TIG, and Fabrication',
      skills: 'MIG & TIG Certifications',
      location: 'Pearland, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Tank Welder Helper',
      jobCat: 'Welding',
      employer: 'Boasso Global',
      desc: 'Climb in & out of tanks to conduct welding operations',
      skills: 'Read Measurments, Respirator Fit Check',
      location: 'Pasadena, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'HVAC Installer',
      jobCat: 'HVACR',
      employer: 'Clear The Air',
      desc: 'Installation and Maintenance',
      skills: 'Valid Drivers License',
      location: 'Friendswood, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'HVAC Technician',
      jobCat: 'HVACR',
      employer: 'Trinity Multifamily',
      desc: 'HVACR Maintenance',
      skills: 'High Attention to Detail',
      location: 'League City, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Electrician - Residential',
      jobCat: 'Electrical',
      employer: 'Universal Home Experts',
      desc: 'Residential Electrical Services',
      skills: 'Electrical RW, Jman or Masters',
      location: 'Houston, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Journeyman Electrician',
      jobCat: 'Electrical',
      employer: 'Enermech',
      desc: 'Industrial Electrical Services',
      skills: 'Electrical RW, Jman or Masters',
      location: 'Houston, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Licensed Plumber',
      jobCat: 'Plumbing',
      employer: 'Grand Slam Plumbing',
      desc: 'Residential and Commercial Plumbing Services',
      skills: 'Plumbing License',
      location: 'League City, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      jobTitle: 'Journeyman Plumber',
      jobCat: 'Plumbing',
      employer: 'Able Plumbing Inc.',
      desc: 'Residential and Commercial Plumbing Services',
      skills: 'Plumbing & Drivers License',
      location: 'Houston, Tx',
      website: 'https://m5.apply.indeed.com/beta/indeedapply/form/resume',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
