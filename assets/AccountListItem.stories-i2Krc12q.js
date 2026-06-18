import{a7 as t,c as o}from"./iframe-3eub8g81.js";import{S as s}from"./Handshake-DABuGoK4.js";import{S as e}from"./Bell-Bdf0yfbC.js";import{S as n}from"./Hashtag-N-qSNege.js";import{S as p}from"./Files-DvnUNzn5.js";import{A as l}from"./AccountListItem-CtUowuVx.js";import{A as m}from"./AccountListItemDetails-DEME6ISV.js";import{L as c}from"./List-Bd4lewsS.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Y8YYbtC7.js";import"./Input-C_lNMvAW.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./Heading-Cn9WCavo.js";import"./useHighlightedText-D_KrHTcm.js";import"./ChevronUp-B-pU4SPo.js";import"./ChevronDown-ByzAyPe6.js";import"./ChevronRight-BS_VcXFa.js";import"./HeartFill-DBdzvLtg.js";import"./ContextMenu-y8zF4E0Z.js";import"./useDropdownMenuController-F3dY1VLA.js";import"./Dropdown-D34Rh-FK.js";import"./SearchField-DQomiBHs.js";import"./MagnifyingGlass-BjeT7HiQ.js";import"./FieldBase-C1gDTj8R.js";import"./Typography-BfGFMo_X.js";import"./Field-BEYcEfWR.js";import"./Label-Dn1DYcv0.js";import"./useMenu-DENMRGmJ.js";import"./MenuListItem-kYkVg98b.js";import"./MenuListDivider-Bx6VzZCp.js";import"./MenuListHeading-lAZfEwXv.js";import"./MenuItem-CSF12lCK.js";import"./ItemMedia-BB_XOZ97.js";import"./Checkmark-CY-7WOxt.js";import"./ItemLabel-CEuTRmIa.js";import"./ItemControls-DXPiBYKt.js";import"./InformationSquare-CORGNNV5.js";import"./MenuElipsisHorizontal-C9pt0hzq.js";import"./Section-B8LCASv-.js";import"./Flex-DeWs0m9L.js";import"./ButtonGroup-D2aDB7np.js";import"./Divider-CjLXSzl6.js";import"./SettingsItem-Vm78-Zan.js";import"./SettingsItemBase-B1tn_cXi.js";import"./ItemBase-Dkp179g5.js";import"./ItemLink-BMVyW3FY.js";import"./SettingsModal-DHKl9XyW.js";import"./ModalBody-BLJZdTz1.js";import"./ButtonIcon-CTN-ygEI.js";import"./ButtonLabel-DAR0S7-w.js";import"./AccountOrganization-Ck9ygAZB.js";import"./Byline-CCy36c-a.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
