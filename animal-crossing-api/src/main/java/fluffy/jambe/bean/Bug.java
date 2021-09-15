package fluffy.jambe.bean;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="bugs")
public class Bug extends Creature {
	private String location;
	
	
	public String getLocation() { return location; }
	public void setLocation(String location) { this.location = location; }
	
}