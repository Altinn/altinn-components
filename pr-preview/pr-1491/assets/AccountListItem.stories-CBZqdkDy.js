var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-CmRPDbOf.js";import{S as l}from"./Handshake-DQjrda73.js";import{S as a}from"./Bell-CcxSUtBz.js";import{S as m}from"./Hashtag-DmbYOKVk.js";import{S as c}from"./Files-CpMc5dKU.js";import{A as g}from"./AccountListItem-v9lp36t4.js";import{A as d}from"./AccountListItemDetails-BfICuqeU.js";import{L as u}from"./List-Dcrfn7hV.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-DMNi5z0u.js";import"./Input-SsfERmB5.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./Heading-Bga8Ehqe.js";import"./useHighlightedText-DjvNujh0.js";import"./ChevronUp-Du7zJIj-.js";import"./ChevronDown-DDaXyD9m.js";import"./ChevronRight-DUgz5ktQ.js";import"./HeartFill-BrWfX2ow.js";import"./ContextMenu-Cbf9vWrX.js";import"./useDropdownMenuController-D9mdepVV.js";import"./Dropdown-B1dfaL3E.js";import"./SearchField-DPxFOcjN.js";import"./MagnifyingGlass-CwhdRafK.js";import"./MenuListItem-DYZsrCFE.js";import"./MenuListDivider-USarlITZ.js";import"./MenuItem-CP9JLIOX.js";import"./CheckboxUncheckedIcon-Dld9bvaz.js";import"./RadioUncheckedIcon-zMkD8-D_.js";import"./ItemMedia-BANum1kS.js";import"./ItemLabel-S9If7Ew0.js";import"./ItemControls-CjzJ0cx0.js";import"./FieldBase-uTfpYKlO.js";import"./Typography-3Ni-pGxm.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./useMenu-Dthlol8g.js";import"./InformationSquare-CWm2kkCA.js";import"./Section-BoLEShm2.js";import"./Flex-CHIj3aXb.js";import"./ButtonGroup-Cg6ykbdg.js";import"./Divider-jsMRGXy0.js";import"./SettingsItem-CyuFgI4G.js";import"./SettingsItemBase-g7FynA0W.js";import"./ItemBase-BsdSxlJi.js";import"./ItemLink-BbfZb6VU.js";import"./SettingsModal-CEuFBG6Q.js";import"./ModalBody-MM25gKZr.js";import"./ButtonIcon-CNrehQ60.js";import"./ButtonLabel-B207nJqR.js";import"./AccountOrganization-CiJNMjAj.js";import"./Byline-Br9s5xmQ.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,bt as __namedExportsOrder,xt as default};
