import{a7 as t,c as o}from"./iframe-B2qSCuzl.js";import{S as s}from"./Handshake-DKPe89Wn.js";import{S as e}from"./Bell-CeBdobVY.js";import{S as n}from"./Hashtag-D9Cvz6S-.js";import{S as p}from"./Files-DKoRc6NA.js";import{A as l}from"./AccountListItem-BFYU8RAk.js";import{A as m}from"./AccountListItemDetails-BrgypF5-.js";import{L as c}from"./List-CHDOpQxZ.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DsEnLTXV.js";import"./Input-BEYjfhLL.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./Heading-BraOiwz9.js";import"./useHighlightedText-BGZ3rca6.js";import"./ChevronUp-DsaXlzpU.js";import"./ChevronDown-MLEeMvzz.js";import"./ChevronRight-CE-Naqr7.js";import"./HeartFill-v2yxnjxD.js";import"./ContextMenu-nwu6xbhA.js";import"./useDropdownMenuController-B1sM5Fkl.js";import"./Dropdown-CXjz9DNR.js";import"./SearchField-M5wz_Je4.js";import"./MagnifyingGlass-BW6TNVS9.js";import"./FieldBase-LsrXuCdT.js";import"./Typography-CidHk-ga.js";import"./Field-IfN9vhAd.js";import"./Label-qtoi2ZUa.js";import"./useMenu-4wlPj4vw.js";import"./MenuListItem-C_Y3s3QU.js";import"./MenuListHeading-Dp2ZOdKs.js";import"./MenuItem-DufE-zMI.js";import"./ItemMedia-C3fquT_8.js";import"./Checkmark-1_ErCtmb.js";import"./ItemLabel-CXwcKPbI.js";import"./ItemControls-i4q63th9.js";import"./index-L4tlORLO.js";import"./InformationSquare-Bz2aeVSU.js";import"./MenuElipsisHorizontal-B1j_W8j_.js";import"./Section-vcV9OTBL.js";import"./Flex-DUbFTLOy.js";import"./ButtonGroup-DPqV5ihn.js";import"./Divider-HnqZMYFb.js";import"./SettingsItem-v-e93U__.js";import"./SettingsItemBase-C7zixA8u.js";import"./ItemBase-BlhljEQ3.js";import"./ItemLink-BLJ5L0E3.js";import"./SettingsModal-BLit_PVt.js";import"./ModalBody-DivKqOfu.js";import"./ButtonIcon-BiMVSz7h.js";import"./ButtonLabel-YAaoCcyd.js";import"./AccountOrganization-D7cNEfcF.js";import"./Byline-uBpvUPL7.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
