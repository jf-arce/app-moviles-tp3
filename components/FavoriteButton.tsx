import { Recipe } from '@/services/api';
import { darkTheme, lightTheme } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface FavoriteButtonProps {
  handleFavorite: () => void;
  recipe: Recipe | null;
  isFavorite: (recipeId: string) => boolean;
  theme: typeof lightTheme | typeof darkTheme;
}

export const FavoriteButton = ({ handleFavorite, recipe, isFavorite, theme }: FavoriteButtonProps) => {
    if (!recipe) return null;
    
    return (
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={handleFavorite}
      >
        <Ionicons
          name={isFavorite(recipe.idMeal) ? "heart" : "heart-outline"}
          size={32}
          color={isFavorite(recipe.idMeal) ? "#ff4081" : theme.text}
        />
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  favoriteButton: {
    padding: 8,
    borderRadius: 20,
  },
}); 