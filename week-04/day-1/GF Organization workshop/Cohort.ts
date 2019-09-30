import { Student } from "./Student";
import { Mentor } from "./Mentor";

export class Cohort {
    protected _name: string;
    protected _listOfStudents: Student[];
    protected _listOfMentors: Mentor[];

    constructor (name: string){
        this._name = name;
        this._listOfStudents = [];
        this._listOfMentors = [];
    }

    addStudent(studentToBeAdded: Student): void{
        this._listOfStudents.push(studentToBeAdded);
    }

    addMentor(mentorToAdd: Mentor): void{
        this._listOfMentors.push(mentorToAdd);
    }

    info(): void{
        console.log('The ' , this._name + ' has ' + this._listOfStudents.length + ' students and ' + this._listOfMentors.length + ' mentors.');
    }
}