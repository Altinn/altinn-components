import{a7 as t,c as o}from"./iframe-bg3nhc5C.js";import{S as s}from"./Handshake-sF9rjJ0t.js";import{S as e}from"./Bell-D4GENIpw.js";import{S as n}from"./Hashtag-2v4hMRd8.js";import{S as p}from"./Files-BwIlgDwb.js";import{A as l}from"./AccountListItem-N8PhOUO9.js";import{A as m}from"./AccountListItemDetails-D9d-iBcZ.js";import{L as c}from"./List-v1Yie3cK.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Dk0WBAMJ.js";import"./Input-ByvRROIc.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./Badge-hZ6rpuJP.js";import"./Tooltip-BG2MYXE2.js";import"./Heading-CqXKSZEg.js";import"./useHighlightedText-Ct2V138i.js";import"./ChevronUp-DDZW1UU0.js";import"./ChevronDown-DjIEzGIr.js";import"./ChevronRight-fbKP0qVJ.js";import"./HeartFill-C7iU4Ihv.js";import"./ContextMenu-BEQqNyYm.js";import"./useDropdownMenuController-CwIh1DiK.js";import"./Dropdown-CqGqZ6my.js";import"./SearchField-CjXdfZ37.js";import"./MagnifyingGlass-C3fVRdM8.js";import"./FieldBase-CPws21pp.js";import"./Typography-Ci1MUa-H.js";import"./Field-DXeetSkN.js";import"./Label-BY0S3EO2.js";import"./useMenu-DS82y3su.js";import"./MenuListItem-f8-xfgbP.js";import"./MenuListHeading-CPNZr4rU.js";import"./MenuItem-Dnd2bkX1.js";import"./ItemMedia-CxijgI7U.js";import"./Checkmark-D_j4oKhD.js";import"./ItemLabel-D9bNrZqJ.js";import"./ItemControls-vsK4YZNK.js";import"./index-cKgDDIaZ.js";import"./InformationSquare-BrXIcqKH.js";import"./MenuElipsisHorizontal-CKVexCzt.js";import"./Section-0QuSZB3S.js";import"./Flex-CxgPTFrH.js";import"./ButtonGroup-BzB2tyZw.js";import"./Divider-CjoRgoCi.js";import"./SettingsItem-44Ydqorp.js";import"./SettingsItemBase-D_4-RuwQ.js";import"./ItemBase-D5zPuNeb.js";import"./ItemLink-Cxg09-QY.js";import"./SettingsModal-BOtM7eQZ.js";import"./ModalBody-CViOeQEG.js";import"./ButtonIcon-Bj-DkHCc.js";import"./ButtonLabel-ga4a8HUc.js";import"./AccountOrganization-BUSMeDHV.js";import"./Byline-B0jov5iH.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
