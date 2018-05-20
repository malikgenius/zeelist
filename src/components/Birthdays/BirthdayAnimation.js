import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './happybirthday.json';


export default class BirthdayAnimation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isStopped: false, isPaused: false, lottiefile: '' };
    }
    

	render() {
		// const buttonStyle = {
		// 	display: 'block',
		// 	margin: '10px auto'
        // };

		const defaultOptions = {
			loop: true,
            autoplay: true,
            // animationDataLocal
			animationData
			// rendererSettings: {
			//   preserveAspectRatio: xMidYMid, slice
			// }
		};

		return (
			<div>
				<Lottie 
					options={defaultOptions}
					height={50}
					width={50}
					isStopped={this.state.isStopped}
					isPaused={this.state.isPaused}
				/>
				{/* <button
					style={buttonStyle}
					onClick={() => this.setState({ isStopped: true })}
				>
					stop
				</button>
				<button
					style={buttonStyle}
					onClick={() => this.setState({ isStopped: false })}
				>
					play
				</button>
				<button
					style={buttonStyle}
					onClick={() => this.setState({ isPaused: !this.state.isPaused })}
				>
					pause
				</button> */}
			</div>
		);
	}
}
