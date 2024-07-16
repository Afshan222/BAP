import { faker } from '@faker-js/faker'; 

export function generateRandomEmail() {
    const domain1 = 'afshan';
    const randomPart = faker.random.alphaNumeric(6);
    const domain2 = 'plastk.ca';
  
    const email = `${domain1}+${randomPart}@${domain2}`;
  
    return email;
  }