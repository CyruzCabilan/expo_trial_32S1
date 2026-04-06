import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

function GoalHeader(props) {
  function userIconPressHandler() {
    Alert.alert(
      '👋 Welcome!',
      'Welcome to Goal Tracker! Start adding your course goals.',
      [{ text: 'Thanks!', style: 'default' }]
    );
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>🎯 Goal Tracker</Text>
        <Pressable onPress={userIconPressHandler}>
          <Text style={styles.userIcon}>👤</Text>
        </Pressable>
      </View>
      <Text style={styles.subText}>Track your course goals!</Text>
      <Pressable style={styles.addButton} onPress={props.onOpenModal}>
        <Text style={styles.addButtonText}>+ Add New Goal</Text>
      </Pressable>
    </View>
  );
}

export default GoalHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  userIcon: {
    fontSize: 28,
  },
  subText: {
    fontSize: 14,
    color: '#e0f2e9',
    marginTop: 4,
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
