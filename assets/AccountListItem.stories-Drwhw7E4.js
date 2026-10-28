var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a5 as t,b as p}from"./iframe-zDfzPjQ-.js";import{S as l}from"./Handshake-CQ3tX6iy.js";import{S as a}from"./Bell-Dn9a_7gF.js";import{S as m}from"./Hashtag-DD3VS_jg.js";import{S as c}from"./Files-D_SjqVgP.js";import{A as g}from"./AccountListItem-CanKq4AY.js";import{A as d}from"./AccountListItemDetails-B4LFyFFd.js";import{L as u}from"./List-CN9gT4yl.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-Ch60BFaY.js";import"./Input-Cng2zass.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./ChevronUp-0LePS4pY.js";import"./ChevronDown-D8vGjyTz.js";import"./ChevronRight-NBomJvaL.js";import"./HeartFill-DWq4EM8k.js";import"./ContextMenu-Bewy7zPd.js";import"./useDropdownMenuController-DI7euvCu.js";import"./Dropdown-CgXp4lfy.js";import"./SearchField-BRYpM6iz.js";import"./MagnifyingGlass-D8qauCMU.js";import"./MenuListItem-C5YqUBJw.js";import"./MenuListHeading-adQ6tRoH.js";import"./MenuItem-BBg2qC2v.js";import"./ItemMedia-C2cNA_4j.js";import"./Checkmark-BOXV2bQM.js";import"./ItemLabel-CLN34YKw.js";import"./ItemControls-D2gn34WX.js";import"./FieldBase-DhhNDbiD.js";import"./Typography-D20OWptm.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./useMenu-D1ILj_Qw.js";import"./MenuListDivider-DUIlDVWP.js";import"./InformationSquare-DREHqyul.js";import"./MenuElipsisHorizontal-BZuKIlkb.js";import"./Section-BxkDhIq7.js";import"./Flex-D4woKuNy.js";import"./ButtonGroup-DS66Ru9T.js";import"./Divider-DfF_JaXt.js";import"./SettingsItem-CgwjMuo9.js";import"./SettingsItemBase-Ci6e4bQP.js";import"./ItemBase-CBBaiBDD.js";import"./ItemLink-C2Q5plIG.js";import"./SettingsModal-fD6tePd9.js";import"./ModalBody-BmMBPQXf.js";import"./ButtonIcon-Ck0HIEFU.js";import"./ButtonLabel-lbb0L__I.js";import"./AccountOrganization-_kkUP5e8.js";import"./Byline-TWFgJpOx.js";const bt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},Xt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,Xt as __namedExportsOrder,bt as default};
