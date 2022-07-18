type IRoom = IBaseApi<{
  RoomID: number;
  RoomCode: string;
  RoomName: string;
  BranchID: number;
}>;
type ICheckRoom = IBaseApi<{
	id: number
	name: string
	select: boolean
}>