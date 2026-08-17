import{a7 as t,c as o}from"./iframe-ju2_P8cU.js";import{S as s}from"./Handshake-C45PD5iU.js";import{S as e}from"./Bell-Cqbuk4aR.js";import{S as n}from"./Hashtag-s7VPG52d.js";import{S as p}from"./Files-CunyTY3L.js";import{A as l}from"./AccountListItem-BDNKR9HL.js";import{A as m}from"./AccountListItemDetails-DY6DBoZv.js";import{L as c}from"./List-CUFUNE10.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CMgPAGjD.js";import"./Input-DOMevMNG.js";import"./Avatar-BseCFng7.js";import"./AvatarGroup-DlioajxJ.js";import"./Badge-C5qbsRzf.js";import"./Tooltip-BIlU6ctt.js";import"./Heading-BwdjGJ12.js";import"./useHighlightedText-Ds75xSSg.js";import"./ChevronUp-DzbOnysK.js";import"./ChevronDown-DI9j-k90.js";import"./ChevronRight-C-B7qVOy.js";import"./HeartFill-CVku7E_F.js";import"./ContextMenu-Btl7LJ1G.js";import"./useDropdownMenuController-QhPAjtom.js";import"./Dropdown-1f1KBVL6.js";import"./SearchField-DBcXR3Pi.js";import"./MagnifyingGlass-B6MeB1Gn.js";import"./FieldBase-B0oEW9Tf.js";import"./Typography-B5wbJTRa.js";import"./Field-BVh1vOLY.js";import"./Label-CCaZkUUa.js";import"./useMenu-C_YjP6fk.js";import"./MenuListItem-DYFDVXHn.js";import"./MenuListDivider-CKbzfKKF.js";import"./MenuListHeading-CawXvXz1.js";import"./MenuItem-CTnwjskA.js";import"./ItemMedia-BZfNDLpv.js";import"./Checkmark-DdndXx_3.js";import"./ItemLabel-DZZbZME8.js";import"./ItemControls-DCzps0Gu.js";import"./InformationSquare-DxoPvZKH.js";import"./MenuElipsisHorizontal-B8s7-qPg.js";import"./Section-BBG26hDa.js";import"./Flex-BBjiPxTz.js";import"./ButtonGroup-B2X4F04D.js";import"./Divider-Cg9vCZeu.js";import"./SettingsItem-CF3vXzr3.js";import"./SettingsItemBase-ByQ-5qi7.js";import"./ItemBase-CkWChTpa.js";import"./ItemLink-nv4hDnw7.js";import"./SettingsModal-CRoAK6Cz.js";import"./ModalBody-DN8l4H7v.js";import"./ButtonIcon-B8rfoecA.js";import"./ButtonLabel-De0xiolO.js";import"./AccountOrganization-BwrdOas-.js";import"./Byline-C4m4OP28.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
