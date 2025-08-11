#!/usr/bin/env python3
"""
Script to replace ONLY image URLs in existing img tags with a specific Unsplash URL.
This script ONLY changes the src attribute of existing img elements.
"""

import re
import sys
import os

# Specific Unsplash image URL as requested
SPECIFIC_UNSPLASH_URL = "https://unsplash.com/photos/a-bright-clustered-star-group-in-the-night-sky-SwBhWx8oPT8"

def replace_image_urls_only(content):
    """
    Replace ONLY the src attribute of existing img tags with the specific Unsplash URL.
    This does NOT create new div elements - only changes existing image URLs.
    
    Args:
        content (str): The file content to process
        
    Returns:
        tuple: (modified_content, replacement_count)
    """
    # Pattern to match img tags with src attributes
    img_pattern = r'<img[^>]*src=["\'][^"\']*["\'][^>]*>'
    
    replacement_count = 0
    
    print("Checking for existing img tags to replace their src URLs...")
    print("-" * 80)
    
    # Find all img tags
    matches = list(re.finditer(img_pattern, content))
    
    if not matches:
        print("No img tags found")
        return content, 0
    
    print(f"Found {len(matches)} img tags")
    
    # Replace matches in reverse order to maintain positions
    for match in reversed(matches):
        img_tag = match.group()
        
        # Replace the src attribute with our specific URL
        new_img_tag = re.sub(r'src=["\'][^"\']*["\']', f'src="{SPECIFIC_UNSPLASH_URL}"', img_tag)
        
        # Log the replacement
        line_number = content[:match.start()].count('\n') + 1
        print(f"Line {line_number}: Replacing img src URL")
        print(f"Old tag: {img_tag[:60]}...")
        print(f"New tag: {new_img_tag[:60]}...")
        print("-" * 40)
        
        # Replace the match
        content = content[:match.start()] + new_img_tag + content[match.end():]
        replacement_count += 1
    
    return content, replacement_count

def replace_base64_images(file_path):
    """
    Replace ONLY image URLs in existing img tags with specific Unsplash URL.
    No new div elements are created.
    
    Args:
        file_path (str): Path to the HTML file to process
    """
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
            content = file.read()
        
        # ONLY replace image URLs in existing img tags
        content, img_replacements = replace_image_urls_only(content)
        
        if img_replacements == 0:
            print(f"No img tags found in {file_path}")
            return
        
        # Write the modified content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content)
        
        print(f"Successfully replaced {img_replacements} image URLs in {file_path}")
        
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
    except Exception as e:
        print(f"Error processing file '{file_path}': {str(e)}")

def main():
    """Main function to handle command line arguments and process files."""
    if len(sys.argv) < 2:
        print("Usage: python replace_base64_images.py <file_path>")
        print("Example: python replace_base64_images.py 'Debt Collection Services ｜ Diversified Adjustment Service, Inc. (8_2_2025 12：45：03 AM).html'")
        sys.exit(1)
    
    file_path = sys.argv[1]
    
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' does not exist.")
        sys.exit(1)
    
    print(f"Processing file: {file_path}")
    print("=" * 80)
    
    replace_base64_images(file_path)

if __name__ == "__main__":
    main() 