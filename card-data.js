// --- Card Data ---
// นี่คือไฟล์ฐานข้อมูลการ์ดของคุณ
// หากต้องการเพิ่ม/แก้ไข/ลบการ์ดในอนาคต ให้ทำที่ไฟล์นี้ได้เลย
// ตอนนี้ได้ใส่ข้อมูลตัวอย่างจากชุด BOTS1 ไว้ให้ทดสอบก่อน คุณสามารถแทนที่ด้วยข้อมูลชุด SD01 ของคุณได้ทั้งหมด

const cardDatabase = [
    {"id":"BOTS1-001","name":"ทหารรับจ้าง","type":"Unit","color":"Red","cost":"1","tribe":"Human","atk":"2","hp":"1","ability":"-","imageUrl":"https://drive.google.com/uc?export=view&id=1Y-3V1j-n9t_24y1Z_Z_u-P7r3q_R1n7o"},
    {"id":"BOTS1-002","name":"ก็อบลินฝึกหัด","type":"Unit","color":"Red","cost":"1","tribe":"Goblin","atk":"1","hp":"1","ability":"เมื่อยูนิตนี้ลงมาในสนาม คุณสามารถแสดงการ์ดเผ่า Goblin 1 ใบจากบนมือคุณ จากนั้นจั่วการ์ด 1 ใบ","imageUrl":"https://drive.google.com/uc?export=view&id=1J-a3Vf9x_g7w_u7g_Q_U-Y2o-O_P4g2_"},
    {"id":"BOTS1-003","name":"ออร์คตาเดียว","type":"Unit","color":"Red","cost":"2","tribe":"Orc","atk":"3","hp":"2","ability":"-","imageUrl":"https://drive.google.com/uc?export=view&id=1g-C3c-d_J9k_i8s_k_g_e_H5e_I_H_E9"},
    {"id":"BOTS1-004","name":"มือสังหารเงา","type":"Unit","color":"Red","cost":"2","tribe":"Human","atk":"2","hp":"2","ability":"ซ่อนตัว (ยูนิตนี้ไม่สามารถถูกโจมตีหรือเป็นเป้าหมายของยูนิตฝ่ายตรงข้ามได้ จนกว่ายูนิตนี้จะทำการโจมตี)","imageUrl":"https://drive.google.com/uc?export=view&id=1f-t_W_U-R_J-F_q-E_h-Y_d-O_U-O_Y_"},
    {"id":"BOTS1-005","name":"ก็อบลินจอมขโมย","type":"Unit","color":"Red","cost":"3","tribe":"Goblin","atk":"2","hp":"2","ability":"เมื่อยูนิตนี้โจมตีสำเร็จ คุณสามารถเลือกการ์ด 1 ใบบนมือฝ่ายตรงข้ามมาดูได้","imageUrl":"https://drive.google.com/uc?export=view&id=1-o_p_q_w_z_Y_t_Y_W_x_U_Y_u_k_b_I_"},
    {"id":"BOTS1-006","name":"นักรบคลั่ง","type":"Unit","color":"Red","cost":"3","tribe":"Human","atk":"3","hp":"1","ability":"เมื่อยูนิตนี้ลงมาในสนาม ทำลายยูนิตที่มีพลังป้องกัน 1 หรือน้อยกว่า 1 ใบในสนาม","imageUrl":"https://drive.google.com/uc?export=view&id=1-N_i_o_E_V_y_m_l_G_K_J_L_G_E_z_X_"},
    {"id":"BOTS1-007","name":"ออร์คจอมโหด","type":"Unit","color":"Red","cost":"4","tribe":"Orc","atk":"4","hp":"4","ability":"-","imageUrl":"https://drive.google.com/uc?export=view&id=1-M_b_e_L_u_g_s_c_I_J_e_l_Q_Z_X_W_"},
    {"id":"BOTS1-008","name":"หัวหน้าก็อบลิน","type":"Unit","color":"Red","cost":"4","tribe":"Goblin","atk":"3","hp":"3","ability":"ยูนิตเผ่า Goblin ของคุณในสนามได้รับพลังโจมตี +1","imageUrl":"https://drive.google.com/uc?export=view&id=1-H_A_z_K_I_a_e_y_l_Q_p_Y_T_r_V_O_"},
    {"id":"BOTS1-009","name":"มังกรแดง","type":"Unit","color":"Red","cost":"5","tribe":"Dragon","atk":"5","hp":"5","ability":"เมื่อยูนิตนี้ลงมาในสนาม ทำความเสียหาย 2 หน่วยใส่ยูนิต 1 ใบในสนาม","imageUrl":"https://drive.google.com/uc?export=view&id=1-G_w_f_g_E_v_w_V_o_N_Z_s_f_h_X_Y_"},
    {"id":"BOTS1-010","name":"ระเบิดเพลิง","type":"Spell","color":"Red","cost":"2","tribe":"-","atk":"-","hp":"-","ability":"ทำความเสียหาย 3 หน่วยใส่ยูนิต 1 ใบในสนาม","imageUrl":"https://drive.google.com/uc?export=view&id=1-C_t_O_v_J_a_s_Z_W_f_l_E_z_g_U_c_"}
];
