import { openDB } from 'idb';

const DATABASE_NAME = 'jate';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'jate';

const initDB = async () => {
  try {
    const db = await openDB(DATABASE_NAME, DATABASE_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
          const objectStore = db.createObjectStore(OBJECT_STORE_NAME, {
            keyPath: 'id',
            autoIncrement: true,
          });
          console.log(`Object store '${OBJECT_STORE_NAME}' created in ${DATABASE_NAME}`);
        } else {
          console.log(`Object store '${OBJECT_STORE_NAME}' already exists in ${DATABASE_NAME}`);
        }
      },
    });
    return db;
  } catch (error) {
    console.error('Failed to initialize the database:', error);
  }
};

// GET function
export const getDb = async () => {
  console.log('Getting data from the jateDB');
  try {
    const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
    const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const objStore = tx.objectStore(OBJECT_STORE_NAME);
    const data = await objStore.getAll();
    console.log('Data retrieved from the jateDB:', data);
    return data;
  } catch (error) {
    console.error('Failed to get data from the database:', error);
  }
};

// PUT function
export const putDb = async (id, value) => {
  console.log('PUT request to update the jateDB');
  try {
    const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objStore = tx.objectStore(OBJECT_STORE_NAME);
    await objStore.put({ id, value });
    console.log('Data saved to the jateDB');
  } catch (error) {
    console.error('Failed to update the database:', error);
  }
};

(async () => {
  const db = await initDB();
  // Perform any further operations with the database if needed
})();