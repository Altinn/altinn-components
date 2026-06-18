import{a7 as t,c as o}from"./iframe-DK-3qaH3.js";import{S as s}from"./Handshake-D04Xg_zb.js";import{S as e}from"./Bell-B2De-DAc.js";import{S as n}from"./Hashtag-BpZy8XcW.js";import{S as p}from"./Files-BdIvcjGk.js";import{A as l}from"./AccountListItem-DkAWcHzG.js";import{A as m}from"./AccountListItemDetails-oUwOn8w0.js";import{L as c}from"./List-DMs9eogo.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DtUr0D4a.js";import"./Input-DJCzCnsD.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./Heading-DNUoGPcg.js";import"./useHighlightedText-aZdhyhaW.js";import"./ChevronUp-Clh2aWfB.js";import"./ChevronDown-DHOBL84L.js";import"./ChevronRight-DR_DMSPj.js";import"./HeartFill-1h63XNfU.js";import"./ContextMenu-DSn14Iqq.js";import"./useDropdownMenuController-CvLgPp7R.js";import"./Dropdown-PqayCWXB.js";import"./SearchField--OTsh4KX.js";import"./MagnifyingGlass-DGoMhHAJ.js";import"./FieldBase-CZ_e8plx.js";import"./Typography-B48kpFr9.js";import"./Field-DU2lFA0F.js";import"./Label-BEcshVOu.js";import"./useMenu-Bn-ufHFt.js";import"./MenuListItem-CwhP6zUQ.js";import"./MenuListDivider-gWW_DkP0.js";import"./MenuListHeading-CObV-6CL.js";import"./MenuItem-CrLVrhNO.js";import"./ItemMedia-SL7nkuf2.js";import"./Checkmark-BzKF2oQV.js";import"./ItemLabel-DjAxhpTi.js";import"./ItemControls-CxO-bUey.js";import"./InformationSquare-MLoftbJC.js";import"./MenuElipsisHorizontal-D8SBLf1r.js";import"./Section-DmYaryGo.js";import"./Flex-BBCXBNec.js";import"./ButtonGroup-DGe-ZwJP.js";import"./Divider-B0ZQHXYE.js";import"./SettingsItem-D4XbQb8t.js";import"./SettingsItemBase-m7YyFG8T.js";import"./ItemBase-BM-aAa-z.js";import"./ItemLink-BKoe5vzb.js";import"./SettingsModal-DUR2VTRq.js";import"./ModalBody-DZQNHHny.js";import"./ButtonIcon-CfGlO7so.js";import"./ButtonLabel-D_XAGhmx.js";import"./AccountOrganization-DVy6lS4B.js";import"./Byline-iVPCQl5-.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
