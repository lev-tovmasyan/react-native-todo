import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import EditModal from "../components/EditModal";
import { THEME } from "../theme";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useStore } from "../context/StateProvider";

const TodoInfoScreen = () => {
	const [isModalVisible, setIsMobileVisible] = useState(false);
	const {state, removeTodo, setTodoId, changeTodo} = useStore()
	const todo = state.todos.find((item) => item.id === state.todoId)

	return (
		<View style={styles.container}>
			<EditModal
				isModalVisible={isModalVisible}
				setIsMobileVisible={setIsMobileVisible}
				changeTodo={changeTodo}
				index={todo.id}
				value={todo.title}
			/>

			<Card>
				<Text style={styles.titleText}>{todo.title}</Text>
				<TouchableOpacity
					style={styles.editButton}
					onPress={() => setIsMobileVisible(true)}
				>
					<FontAwesome style={styles.textColor} name="edit" size={16} />
				</TouchableOpacity>
			</Card>

			<View style={styles.buttonGroup}>
				<View style={styles.button}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => setTodoId(null)}
					>
						<AntDesign style={styles.textColor} name="back" size={20} />
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					<TouchableOpacity
						style={styles.removeButton}
						onPress={() => removeTodo(todo.id)}
					>
						<FontAwesome style={styles.textColor} name="remove" size={20} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default TodoInfoScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	buttonGroup: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	button: {
		width: "45%",
		height: 40,
	},
	backButton: {
		backgroundColor: THEME.GREY_COLOR,
		borderRadius: 10,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	removeButton: {
		backgroundColor: THEME.DANGER_COLOR,
		borderRadius: 10,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	textColor: {
		color: "white",
	},
	editButton: {
		backgroundColor: THEME.MAIN_COLOR,
		borderRadius: 5,
		height: 30,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 3,
	},
	titleText: {
		fontSize: 20,
		paddingRight: 15,
	},
});
