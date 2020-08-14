import java.util.PriorityQueue;

class Solution {
  public static void main(String[] args) {
    System.out.print("Running findKthLargest");
    int[] arr = {3,2,1,5,6,4};
    Solution sol = new Solution();
    sol.findKthLargest(arr, 0);
  }
  public int findKthLargest(int[] nums, int k) {
      PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
      for(int i : nums){
          pq.add(i);
          if(pq.size() > k)//always keep track of the kth largest using the queue
              pq.remove();
      }
      return pq.remove();
  }
}
