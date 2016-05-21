import { connect } from 'react-redux';
import Counter from '../components/Counter';

export default (field, type) => {
	const mapStateToProps = (state) => {
		return {
			value: state[field]
		}
	};

	const mapDispatchToProps = (dispatch) => {
		return {
			increment: () => {
				dispatch({type});
			}
		}
	};

	return connect(
		mapStateToProps,
		mapDispatchToProps)
	(Counter);
};