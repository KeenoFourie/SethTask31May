
// Question 1: Create an array of objects that each contain the name, surname and age of the people in this group. 9 objects in total.
// Question 1:
let person1 = {
    name: 'Amy',
    surname: 'Pieterse',
    age: 22
}
let person2 = {
    name: 'Mish-Al',
    surname: 'Taliep',
    age: 20
}
let person3 = {
    name: 'Jason',
    surname: 'Viljoen',
    age: 95
}
let person4 = {
    name: 'Logan',
    surname: 'Paul',
    age: 24
}
let person5 = {
    name: 'Jason',
    surname: 'Barron',
    age: 35
}
let person6 = {
    name: 'Alonso',
    surname: 'Cupido',
    age: 41
}
let person7 = {
    name: 'Siyamthanda',
    surname: 'Mazokwana',
    age: 54
}
let person8 = {
    name: 'Keeno',
    surname: 'Fourie',
    age: 18
}
let person9 = {
    name: 'Seth',
    surname: 'Kallis',
    age:22
}

// Question 3: Renders each person object in the table using JavaScript
// Question 3:

let display = document.querySelector('#output_display')
console.log(display);

display.innerHTML = `
<tr>
    <td>${person1.name}</td>
    <td>${person1.surname}</td>
    <td>${person1.age}</td>
</tr>
<tr>
    <td>${person2.name}</td>
    <td>${person2.surname}</td>
    <td>${person2.age}</td>
</tr>
<tr>
    <td>${person3.name}</td>
    <td>${person3.surname}</td>
    <td>${person3.age}</td>
</tr>
<tr>
    <td>${person4.name}</td>
    <td>${person4.surname}</td>
    <td>${person4.age}</td>
</tr>
<tr>
    <td>${person5.name}</td>
    <td>${person5.surname}</td>
    <td>${person5.age}</td>
</tr>
<tr>
    <td>${person6.name}</td>
    <td>${person6.surname}</td>
    <td>${person6.age}</td>
</tr>
<tr>
    <td>${person7.name}</td>
    <td>${person7.surname}</td>
    <td>${person7.age}</td>
</tr>
<tr>
    <td>${person8.name}</td>
    <td>${person8.surname}</td>
    <td>${person8.age}</td>
</tr>
<tr>
    <td>${person9.name}</td>
    <td>${person9.surname}</td>
    <td>${person9.age}</td>
</tr>
`