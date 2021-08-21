import React from 'react';
import axios from 'axios';

//also if you do import React, {Component} from react
// you can just do class Main extends Component{ .... }



export default class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			students: [],
		};
	}

  ///if i want to fetch data from database, use a class component so you can use component did mount to get the data, coudnlt do it in a fucntion

	async componentDidMount() {
		try {
			const res = await axios.get('/student');

      ////any data taht you get will be on the response.data
			const students = res.data;
			this.setState({ students });
      // const {students} this.state   <destructured
		} catch (err) {
			console.log(err);
		}
	}
  //axios is a brdige from front end to the back end
  //

  //async getStudents(){ try{ const response = await axios.get('student/') } catch(err) console.log(err)}

	render() {
		return (
			<div id="main">
				<table>
          <tbody>
					<tr>
						<td>
							<table>
								<thead>
									<tr>
										<td>Name</td>
									</tr>
								</thead>
								<tbody>
									<tr>
                    <td>
										{this.state.students.map((student) => {
											return <tr key={student.id}>{student.fullName} </tr>;
										})}
                    </td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
          </tbody>
				</table>
			</div>
		);
	}
}


//create a main component in components folder that fetches a list of all students from teh server. it should render a table of those students with one column: the students full name
