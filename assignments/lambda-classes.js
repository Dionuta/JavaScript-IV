// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
    constructor(attributes){
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanquage = attributes.favLanquage;
    this.catchPhrase = attributes.catchPhrase;
    }
  demo(subject){
      return `Today we are learning about ${subject}`
  }
  grade(student, subject){
      return `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
    constructor(attributes){
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    }
    listsSubject(){ // loops through subjects
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssigment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class PM extends Instructor{
    constructor(attributes){
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel){
    return `${this.name} announce to ${channel}, @channel standy time`
  }
  debugCode(student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}
// Instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const dave = new Instructor({
      name: 'Dave Everyman',
      location: 'Smalltown, USA',
      age: 25,
      gender: 'male',
      favLanguage: 'Ruby',
      specialty: 'Back-end',
      catchPhrase: 'I like eggs'
  });

  //Stundents 

  const milly = new Student ({
      name: 'Milly Somename',
      age: 19,
      location: 'next to that one place.',
      gender: 'female',
      previousBackground: 'Geology but did not like rocks.',
      className: 'WEBPT26',
      favSubjects: ['CSS', 'React', 'Redux']
  });

  const jackie = new Student ({
      name: "Jackie No'Chans",
      age: 64,
      location: 'Victoria Peak, Hong Kong',
      gender: 'male',
      previousBackground: 'Stunt Double',
      className:'CSS14',
      favSubjects: ['RESTful', 'Advanced CSS', 'Authentication']
  });

  // Project Manangers
  const batman = new PM ({
      name: 'Batman Ben Suparman',
      age: 35,
      location: 'South Smallville',
      gender: 'non binary',
      gradClassName: 'CS2',
      favInstructor: 'Fred',  
      catchPhrase: 'Welcome to flavortown!'       
  })

  const mike = new PM({
      name: 'Mike Adams',
      age: 24,
      location: 'Houston, TX',
      gender: 'male',
      gradClassName: 'WEBPT 1',
      favInstructor: 'Dave',
      catchPhrase: 'zzz'

  })
  

  //Instructor logs
  console.log(fred.demo('JavaScript'));
  console.log(dave.grade(milly, 'HTML'));
  console.log(dave.speak());
  console.log(dave.catchPhrase);

  //Student logs
  console.log(milly.listsSubject());
  console.log(milly.PRAssigment('JSII'));
  console.log(jackie.sprintChallenge('Redux'));
  console.log(milly.speak());

  //Project Manager logs
  console.log(batman.standUp('WEBPT4'));
  console.log(mike.debugCode(milly, 'JavaScript'));

