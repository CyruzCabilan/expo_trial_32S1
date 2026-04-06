import { View, Text, Pressable, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Pressable
        onPress={props.onDelete}
        android_ripple={{ color: '#ffcdd2' }}
        style={({ pressed }) => [
          styles.deleteButton,
          pressed && styles.deleteButtonPressed,
        ]}
      >
        <Text style={styles.deleteText}>🗑</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
    elevation: 2,
  },
  goalText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  deleteButton: {
    padding: 6,
    borderRadius: 6,
    backgroundColor: '#ffebee',
    marginLeft: 10,
  },
  deleteButtonPressed: {
    opacity: 0.6,
  },
  deleteText: {
    fontSize: 18,
  },
});