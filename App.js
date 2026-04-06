import { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Text, Pressable, Alert } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import GoalHeader from './components/GoalHeader';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim() === '') return;

    const updatedGoals = [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ];

    setCourseGoals(updatedGoals);

    if (updatedGoals.length > 5) {
      setWarningVisible(true);
    }
  }

  function deleteGoalHandler(key) {
    Alert.alert(
      'Delete Goal',
      'Are you sure you want to delete this goal?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setCourseGoals((currentGoals) =>
              currentGoals.filter((goal) => goal.key !== key)
            );
          },
        },
      ]
    );
  }

  return (
    <View style={styles.appContainer}>

      {/* Warning Modal - more than 5 goals */}
      <Modal visible={warningVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>⚠️ Too Many Goals!</Text>
            <Text style={styles.modalText}>
              You have too many goals! Focus on what matters most and avoid
              overwhelming yourself with too much burden.
            </Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setWarningVisible(false)}
            >
              <Text style={styles.modalButtonText}>I Understand</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Add Goal Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add a New Goal</Text>
            <GoalInput
              onAddGoal={(text) => {
                addGoalHandler(text);
                setModalVisible(false);
              }}
            />
            <Pressable
              style={[styles.modalButton, { backgroundColor: '#e53935' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <GoalHeader onOpenModal={() => setModalVisible(true)} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              onDelete={() => deleteGoalHandler(itemData.item.key)}
            />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f5f7fa',
  },
  goalsContainer: {
    height: 300,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2c3e50',
  },
  modalText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});