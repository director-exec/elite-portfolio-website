#!/usr/bin/env python3
"""
Script to replace all instances of "Diversified Adjustment Service" 
with "Elite Portfolio Management" in HTML files.
"""

import re
import sys
import os

def replace_company_name(file_path):
    """Replace all instances of Diversified Adjustment Service with Elite Portfolio Management"""
    
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' not found.")
        return
    
    try:
        # Read the file with UTF-8 encoding
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Store original content for comparison
        original_content = content
        
        # Define replacement patterns
        replacements = [
            # Full company name with Inc.
            (r'Diversified Adjustment Service, Inc\.', 'Elite Portfolio Management'),
            # Company name without Inc.
            (r'Diversified Adjustment Service', 'Elite Portfolio Management'),
            # Handle variations with different spacing
            (r'Diversified\s+Adjustment\s+Service', 'Elite Portfolio Management'),
        ]
        
        # Track replacements
        total_replacements = 0
        line_replacements = []
        
        # Split content into lines for line number tracking
        lines = content.split('\n')
        
        # Apply each replacement pattern
        for pattern, replacement in replacements:
            # Find all matches in the content
            matches = list(re.finditer(pattern, content, re.IGNORECASE))
            
            for match in matches:
                # Find which line this match is on
                line_num = content[:match.start()].count('\n') + 1
                
                # Get the first 40 characters of the line
                line_start = content.rfind('\n', 0, match.start()) + 1
                line_end = content.find('\n', match.start())
                if line_end == -1:
                    line_end = len(content)
                
                line_content = content[line_start:line_end]
                first_40 = line_content[:40].replace('\n', ' ').strip()
                
                # Log the replacement
                print(f"Line {line_num}: {first_40}...")
                print(f"  Replacing: '{match.group()}' with '{replacement}'")
                
                line_replacements.append((line_num, first_40, match.group(), replacement))
                total_replacements += 1
            
            # Apply the replacement to the content
            content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
        
        # Write the modified content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content)
        
        print(f"\n✅ Successfully processed '{file_path}'")
        print(f"📊 Total replacements made: {total_replacements}")
        
        if total_replacements > 0:
            print(f"💾 File has been updated with Elite Portfolio Management branding")
        else:
            print(f"ℹ️  No instances of 'Diversified Adjustment Service' found in this file")
            
    except Exception as e:
        print(f"Error processing file '{file_path}': {e}")

def main():
    """Main function to handle command line arguments"""
    
    if len(sys.argv) != 2:
        print("Usage: python replace_company_name.py <file_path>")
        print("Example: python replace_company_name.py \"Debt Collection Services.html\"")
        sys.exit(1)
    
    file_path = sys.argv[1]
    replace_company_name(file_path)

if __name__ == "__main__":
    main() 