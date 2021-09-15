package fluffy.jambe.bean;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="sea")
public class SeaCreature extends Creature {
	private String size;
	private String swimPattern;
	
	
	public String getSize() { return size; }
	public void setSize(String size) { this.size = size; }
	
	public String getSwimPattern() { return swimPattern; }
	public void setSwimPattern(String swimPattern) { this.swimPattern = swimPattern; }
	
	
	
}