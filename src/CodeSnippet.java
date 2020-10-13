import java.util.Date;
import java.util.List;

public class CodeSnippet {
  int pk;
  int storageForeignKey;
  User owner;
  Date dateCreated;
  Date lastModified;
  String content;
  List tags;
  boolean priv;
}
