import { collection, getDocs } from 'firebase/firestore'
import { database } from '../main'
import type { Item } from './types'

export async function getItems(): Promise<Item[]> {
  const querySnapshot = await getDocs(collection(database, 'items'))

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
    description: doc.data().description,
    image: doc.data().image,
    tags: doc.data().tags,
  }))
}
