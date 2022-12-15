import React from 'react';
import { StyleSheet } from 'react-native';

const tableStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  border: {
    borderWidth: 1,
    borderColor: '#222',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
    padding: 4,
    textTransform: 'uppercase',
  },
  description: {
    borderTopWidth: 1,
    borderTopColor: '#222',
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
  },
  twoColumns: {
    flexDirection: 'row',
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#444',
  },
  leftColumn: {
    width: '50%',
    borderRightWidth: 1,
    borderColor: '#444',
    padding: 4,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    textAlign: 'right',
    textAlignVertical: 'center',
    fontSize: 16,
  },
  rightColumn: {
    width: '50%',
    borderLeftWidth: 1,
    borderColor: '#444',
    padding: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  }
});

export default tableStyles;