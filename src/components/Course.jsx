const courses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
]
const Course = () =>{
    
    const renderCourses = () => {
        
        let results= [];

        for (const course of courses) {
            results.push(
                <h2 key ={course.id}>{course.name}</h2>
            )
            
            results.push(course.parts.map(part => (
                <div key={part.id}>
                    <p>{part.name}</p>
                    <p>{part.exercises}</p>
                </div>
            ))) 
        }
        return results;
    }
    
    
    
    const renderTotal = () => {
        return (
            <div>
                <h2>Total exercises: {calculateTotal()}</h2>
            </div>
        );
    }
    const calculateTotal = () => {
        
        // an accumulator (total) which will be the return value of the function and the current value (part). 
        // On each iteration, the part.exercises is added to total
        //The second argument to reduce (0 in this case) is the initial value for total.
        
        let result = 0;

        for (const course of courses) {
            result += course.parts.reduce((total, part) => total + part.exercises, 0)
        }
        
        return result;
    }
    
    return (
        <div>
            <h1>Course</h1>
            {renderCourses()}
            {renderTotal()}
        </div>
    )
}

export default Course;