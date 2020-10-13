import java.util.List;

public class RegisteredUser extends User{
  private int pk;
  String fName;
  String lName;
  String github;
  String email;
  List<CodeSnippet> snippets;
  String oAuthToken;
  UserType permissions;

}
