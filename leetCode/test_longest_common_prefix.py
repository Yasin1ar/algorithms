from longest_common_prefix import longestCommonPrefix


class TestLongestCommonPrefix:
    # Returns common prefix when all strings are of equal length
    def test_returns_common_prefix_with_equal_length_strings(self):
        # Arrange
        strs = ["fl", "fl", "fl"]
        expected_prefix = "fl"

        # Act
        result = longestCommonPrefix(strs)

        # Assert
        assert (
            result == expected_prefix
        ), f"Expected '{expected_prefix}' but got '{result}'"

    def test_returns_common_prefix_with_different_length_strings(self):
        # Arrange
        strs = ["flower", "fl", "flow"]
        expected_prefix = "fl"

        # Act
        result = longestCommonPrefix(strs)

        # Assert
        assert (
            result == expected_prefix
        ), f"Expected '{expected_prefix}' but got '{result}'"

        # Returns empty string when no common prefix exists

    def test_returns_empty_string_when_no_common_prefix(self):
        # Arrange
        strs = ["abc", "def", "ghi"]
        expected_prefix = ""

        # Act
        result = longestCommonPrefix(strs)

        # Assert
        assert (
            result == expected_prefix
        ), f"Expected '{expected_prefix}' but got '{result}'"

        # Handles case when any string after first is empty (returns empty string)

    def test_returns_empty_when_any_string_after_first_is_empty(self):
        # Arrange
        strs = ["fljyyy", "", "flvi"]
        expected_prefix = ""

        # Act
        result = longestCommonPrefix(strs)

        # Assert
        assert (
            result == expected_prefix
        ), f"Expected '{expected_prefix}' but got '{result}'"

        # Handles list with single string (returns that string)

    def test_single_string_returns_itself(self):
        # Arrange
        strs = ["single"]
        expected_prefix = "single"

        # Act
        result = longestCommonPrefix(strs)

        # Assert
        assert (
            result == expected_prefix
        ), f"Expected '{expected_prefix}' but got '{result}'"
