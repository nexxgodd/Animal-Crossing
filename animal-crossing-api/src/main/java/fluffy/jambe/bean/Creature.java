package fluffy.jambe.bean;

import java.util.List;

import org.springframework.data.annotation.Id;

public abstract class Creature {
	@Id
	private int id;
	private String name;
	private int price;
	private String time;
	private List<TimeScale> timeArray;
	private List<Boolean> months;
	
	private class TimeScale{
		public int start;
		public int end;
	}

	public int getId() { return id; }
	public void setId(int id) { this.id = id; }

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public int getPrice() { return price; }
	public void setPrice(int price) { this.price = price; }

	public String getTime() { return time; }
	public void setTime(String time) { this.time = time; }

	public List<TimeScale> getTimeArray() { return timeArray; }
	public void setTimeArray(List<TimeScale> timeArray) { this.timeArray = timeArray; }

	public List<Boolean> getMonths() { return months; }
	public void setMonths(List<Boolean> months) { this.months = months; }
	
	
	@Override
	public String toString() {
		return name;
	}
}
