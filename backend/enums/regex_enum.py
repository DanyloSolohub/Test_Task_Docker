from enum import Enum


class RegEx(Enum):
    NAME = ('^[a-zA-ZА-яіІїЇґҐёЁєЄ]{2,20}$', 'Only alpha ,min 2 max 20 characters ')

    def __init__(self, reg, msg):
        self.msg = msg
        self.reg = reg
